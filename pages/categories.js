/* eslint-disable react/jsx-key */
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    await axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }

  async function saveCategory(ev) {
    ev.preventDefault();
    await axios.post("/api/categories", { name, parentCategory });
    setName("");
    fetchCategories();
  }

  return (
    <Layout>
      <h1>Categorias</h1>
      <label>Categoria</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type="text"
          placeholder="Nome da categoria"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className="mb-0"
        />
        <select
          value={parentCategory}
          onchange={(ev) => setParentCategory(ev.target.value)}
          className="mb-0"
        >
          <option value="">Sem categoria Pai</option>
          {categories.length > 0 &&
            categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
        <button type="submit" className="btn-primary">
          Salvar
        </button>
      </form>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Categorias</td>
            <td>Categoria Pai</td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr>
                <td>{category.name}</td>
                <td>{category.parent}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
