import { db } from "./db";

export const getExamples = db.prepare(`SELECT * FROM examples ORDER BY value DESC`);
export const getExample = db.prepare(`SELECT * FROM examples WHERE value = @value`);
