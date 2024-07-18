import { DataSourceOptions, DataSource } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "nest-blog",
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;