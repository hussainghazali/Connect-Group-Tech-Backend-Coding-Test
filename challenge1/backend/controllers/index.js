const models = require('../database/models');

const getAll = async (req, res) => {
    try {
      const data = await models.employee.findAll({
        include: [
            {
                model: models.attendanceFault,
                as:'attendanceFaults',
            },
            {
                model: models.attendance,
                as:'attendances',
            },
            {
                model: models.schedule,
                as:'schedules',
            },
        ]
      });
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

module.exports = {
getAll,
}
