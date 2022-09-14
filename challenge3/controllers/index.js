const models = require('../database/models');

const getAll = async (req, res) => {
    try {
      const data = await models.company.findAll({
        include: [
            {
                model: models.location,
                as:'locations',
            },
            {
                model: models.asset,
                as:'assets',
            },
            {
                model: models.people,
                as:'peoples',
            },
            {
                model: models.companyGroup,
                as:'companyGroups',
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
