import { User } from "../interfaces/types";

export class ApiService {
  private apiUrl = "https://dummyjson.com/users";

  async getUsers(): Promise<User[]> {
    try {
      const res = await fetch(this.apiUrl);
      if (!res.ok) throw new Error("Error al obtener usuarios");
      const data = await res.json();
      
      return data.users.map((u: any) => ({
        name: `${u.firstName} ${u.lastName}`,
        age: u.age,
        email: u.email,
        gender: u.gender,
      }));
    } catch (error) {
      console.error("Error en getUsers:", error);
      return [];
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const res = await fetch(`${this.apiUrl}/${id}`);
      if (!res.ok) throw new Error("Usuario no encontrado");
      const u = await res.json();

      return {
        name: `${u.firstName} ${u.lastName}`,
        age: u.age,
        email: u.email,
        gender: u.gender,
      };
    } catch (error) {
      console.error("Error en getUserById:", error);
      return null;
    }
  }
}
