const pool = require('../models/database');

/** The getCards method works with the GET /cards route.
 *  The method queries the database for all cards which
 *  is returned as JSON in the response
 * */
async function getCards(req, res) {
  const queryFindAll = 'SELECT * FROM mfc;';
  let queryFindAllResponse;

  try {
    queryFindAllResponse = await pool.query(queryFindAll);
  } catch (err) {
    res.status(400);
    res.send(err);
  }
  res.send(queryFindAllResponse);
}

/** The addCard method works with the POST /cards route.
 *  The method uses the JSON data in the body to
 *  create a new record in the database
 * */
async function addCard(req, res) {
  const { mfc_title, mfc_photo_url, mfc_desc, mfc_factoid } = req.body;
  const values = [mfc_title, mfc_photo_url, mfc_desc, mfc_factoid];
  const queryString = `INSERT INTO mfc (mfc_title, mfc_photo_url, mfc_desc, mfc_factoid ) 
    VALUES (?, ?, ?, ?)`;

  try {
    await pool.query(queryString, values,
      (err, results) => {
        if (err) {
          res.status(400);
          res.send(err);
        } else {
          res.status(201);
          res.send('Card successfully added');
        }
      });
  } catch (err) {
    res.send(err);
  }
}

/** The updateCard method works with the PUT /cards route.
 *  The method uses the JSON data in the body to
 *  update an existing record in the database
 * */
async function updateCard(req, res) {
  const { mfc_title, mfc_photo_url, mfc_desc, mfc_factoid, mfc_id } = req.body;
  const values = [mfc_title, mfc_photo_url, mfc_desc, mfc_factoid, mfc_id];
  const queryString = `UPDATE mfc SET mfc_title = ?, mfc_photo_url = ?, mfc_desc = ?, mfc_factoid = ?  
    WHERE mfc_id = ?`;

  try {
    await pool.query(queryString, values,
      (err, results) => {
        if (err) {
          res.status(400);
          res.send(err);
        } else {
          res.status(204);
          res.send('Card successfully updated');
        }
      });
  } catch (err) {
    res.send(err);
  }
}

/** The deleteCard method works with the DELETE /cards route.
 *  The method uses the card ID passed as a parameter to
 *  delete the record from the database
 * */
async function deleteCard(req, res) {
  const { cardId } = req.params;
  const querySting = 'DELETE from mfc WHERE mfc_id = ?;';

  try {
    await pool.query(querySting, [cardId],
      (err, results) => {
        if (err) {
          res.status(400);
          res.send(err);
        } else {
          res.status(200);
          res.send('Card successfully deleted');
        }
      });
  } catch (err) {
    res.status(400);
    res.send(err);
  }
}

module.exports = { getCards, addCard, updateCard, deleteCard };
