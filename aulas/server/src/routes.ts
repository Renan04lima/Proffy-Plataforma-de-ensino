import express from 'express';

import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

routes.post('/classes', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = req.body;

  const trx = await db.transaction();/* adiciona os dados tudo de uma vez e 
  caso de erro em algum apagar os 
  que deram certo e retorna o error */

  try {
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });
    const user_id = insertedUsersIds[0];

    const insertedClassesId = await trx('classes').insert({
      subject,
      cost,
      user_id,
    });
    const class_id = insertedClassesId[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
      class_id,
      week_day: scheduleItem.week_day,
      from: convertHourToMinutes(scheduleItem.from),
      to: convertHourToMinutes(scheduleItem.to),
    }));

    await trx('class_schedule').insert(classSchedule);

    await trx.commit();

    return res.status(201).send();
  } catch (err) {
    await trx.rollback();
    // console.log(err);
    return res.status(400).json({ error: 'Unexpected error while creating new class.' });
  }
});

export default routes;

/*  import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    //const trx = await db.transaction(); /* adiciona os dados tudo de uma vez e 
    caso de erro em algum apagar os 
    que deram certo e retorna o error 

    //try {
        const insertedUsersIds = await db('users').insert({
            name, // name: name,
            avatar, // avatar: avatar
            whatsapp, // whatsapp: whatsapp,
            bio, // bio: bio
        })
    
        const user_id = insertedUsersIds[0];
    
        const insertedClassesIds = await db('classes').insert({
            subject,
            cost,
            user_id
        });
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to),
            };
        })
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit(); 
        
        return response.status(201).send();
     } catch (err) {
        await trx.rollback();
        console.log(err);
    } 
});

export default routes;
 */