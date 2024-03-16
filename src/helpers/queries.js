const API_URL = import.meta.env.VITE_API_COLORES;

export const getColors = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch colors");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching colors:", error);
    return [];
  }
};

export const addColor = async (color) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color }),
    });
    if (!response.ok) {
      throw new Error("Failed to add color");
    }
    return response.json();
  } catch (error) {
    console.error("Error adding color:", error);
    return null;
  }
};

export const deleteColor = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete color");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting color:", error);
    return null;
  }
};

export const updateColor = async (id, color) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color }),
    });
    if (!response.ok) {
      throw new Error("Failed to update color");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating color:", error);
    return null;
  }
};
