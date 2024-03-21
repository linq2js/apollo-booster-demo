/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from "@faker-js/faker";
import { createGraphQLHandler } from "@miragejs/graphql";
import { createServer } from "miragejs";
import graphQLSchema from "./schema.gql";

createServer({
  routes() {
    const handler = createGraphQLHandler(graphQLSchema, this.schema, {
      context: null,
      root: null,
      resolvers: {},
    });
    this.post("/graphql", async (...args) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return handler(...args);
    });
  },
  seeds(server) {
    function generateCourses(number: number) {
      return new Array(number).fill(null).map(() =>
        server.create("Course", {
          name: faker.lorem.words(),
          description: faker.lorem.sentence(),
          startDate: faker.date.future().toISOString().slice(0, 10), // YYYY-MM-DD format
          endDate: faker.date.future().toISOString().slice(0, 10), // Ensure this is after startDate
        } as any)
      );
    }

    function generateClasses(number: number, courseIds: string[]) {
      return new Array(number).fill(null).map(() => {
        const classDate = faker.date.future();
        const classStart = faker.date.between({
          from: classDate,
          to: new Date(classDate.getTime() + 1 * 60 * 60 * 1000),
        });
        const classEnd = new Date(classStart.getTime() + 2 * 60 * 60 * 1000);
        return server.create("Class", {
          courseId: faker.helpers.arrayElement(courseIds),
          name: faker.lorem.words(2),
          classDate: classDate.toISOString().slice(0, 10),
          startTime: classStart.toISOString(),
          endTime: classEnd.toISOString(),
        } as any);
      });
    }

    function generateAttendances(
      number: number,
      classIds: string[],
      userIds: string[]
    ) {
      return new Array(number).fill(null).map(() =>
        server.create("Attendance", {
          classId: faker.helpers.arrayElement(classIds),
          userId: faker.helpers.arrayElement(userIds),
          attended: faker.datatype.boolean(),
          attendanceDate: faker.date.recent().toISOString().slice(0, 10),
        } as any)
      );
    }

    function generateUsers(number: number) {
      return new Array(number).fill(null).map(() =>
        server.create("User", {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          role: faker.helpers.arrayElement([
            "Administrator",
            "Teacher",
            "Student",
          ]),
        } as any)
      );
    }

    const courses = generateCourses(10);
    const classes = generateClasses(
      30,
      courses.map((course) => course.id)
    );
    const users = generateUsers(50);

    generateAttendances(
      100,
      classes.map((cls) => cls.id),
      users.map((user) => user.id)
    );

    const fakeUpdatedOn = (model: { attrs: any; save: VoidFunction }) => {
      model.attrs.updatedOn = faker.date.anytime().toISOString();
      model.save();
    };

    const fakeUpdate = () => {
      users.forEach(fakeUpdatedOn);
      classes.forEach(fakeUpdatedOn);
      courses.forEach(fakeUpdatedOn);
      setTimeout(fakeUpdate, 1000);
    };

    setTimeout(fakeUpdate, 1000);
  },
});
