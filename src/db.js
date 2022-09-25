/* eslint-disable import/prefer-default-export */
import Dexie from 'dexie';

Dexie.exists('myDatabase').then(async function (exists) {
  if (!exists) {
      var db = new Dexie('myDatabase');
      db.version(9).stores({
        classes: '++id, &name, class_1_id, class_2_id',
        classrooms: '++id, &name, remark, status',
        sessions: '++id, subject_id, class_id, teacher_id, classroom_id, weekday, start_time, end_time',
        subjects: '++id, &name',
        teachers: '++id, &name, subject, email, tel, status',
      });
      db.open();
  await db.classes.add({name:'class 1'});
  await db.classrooms.add({name:'classroom 1',status:1});
  await db.subjects.add({name:'subject 1'});
  await db.teachers.add({name:'teacher 1',status:1});
  }
});
export const db = new Dexie('myDatabase');
db.version(9).stores({
  classes: '++id, &name, class_1_id, class_2_id',
  classrooms: '++id, &name, remark, status',
  sessions: '++id, subject_id, class_id, teacher_id, classroom_id, weekday, start_time, end_time',
  subjects: '++id, &name',
  teachers: '++id, &name, subject, email, tel, status',
});