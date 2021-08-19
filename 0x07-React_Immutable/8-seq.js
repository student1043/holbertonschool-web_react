import { seq } from 'immutable';

export default function printBestStudents(object) {
  const student = seq(object);
  console.log(student);
}
