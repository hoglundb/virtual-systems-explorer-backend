const pool = require('../../config/db');

const getAllParts = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM parts ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    console.error('getAllParts error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getPartById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM parts WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Part not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('getPartById error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updatePart = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const result = await pool.query(
      'UPDATE parts SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description ?? null, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Part not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('updatePart error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllParts, getPartById, updatePart };
