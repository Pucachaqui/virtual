import { pool } from "../db.js";

export const renderCustomer = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM customer");
  console.log(rows);
  res.json(rows);
};


export const createCustomer = async (req, res) => {
  const { name, address, phone } = req.body; // Obtener los valores de req.body
  const newCustomer = { name, address, phone };
  const rows = await pool.query("INSERT INTO customer SET ?", [newCustomer]);
  res.json({ message: "Cliente agregado" });
};

export const editCustome = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM customer WHERE id = ?", [
    id,
  ]);
  console.log(result);
  res.json(result);
};

export const updateCustome = async (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  const result = await pool.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id]);
  console.log(result);
  res.json(result);
};

export const deleteCustome = async (req, res) => {
 
    try {
      const { id } = req.params;
      const result = await pool.query("DELETE FROM customer WHERE id = ?", [id]);
  
      console.log(result); // Verifica el resultado en la consola
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Cliente no encontrado para eliminar" });
      }
  
      res.json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
      console.error(error); // Imprime el error en la consola para depurar
  
      res.status(500).json({ message: "Error al intentar eliminar el cliente", error: error.message });
    }
  };
  
