-- Creating the MySQL table
CREATE TABLE IF NOT EXISTS `mfc` (
  mfc_id SERIAL PRIMARY KEY,
  mfc_title VARCHAR(255),
  mfc_photo_url VARCHAR(255),
  mfc_desc VARCHAR(255),
  mfc_factoid VARCHAR(255)
);

-- Drop a table
DROP TABLE mfc;

-- Find all records
SELECT * FROM mfc;

-- Inserting a record
INSERT INTO mfc (mfc_title, mfc_photo_url, mfc_desc, mfc_factoid )
  VALUES (?, ?, ?, ?);

-- Deleting a records
DELETE from mfc WHERE mfc_id = ?;

-- Updating a record
UPDATE mfc SET mfc_title = ?, mfc_photo_url = ?, mfc_desc = ?, mfc_factoid = ?  WHERE mfc_id = ?;

