import instance from "../utils/instance";

const getCatBreeds = async () => {
    try {
      let response = await instance.get('breeds?limit=20');
      return response?.data;
    } catch (error) {
      throw error;
    }
};

const getCatBreedById = async (id: string) => {
    try {
      let response = await instance.get(`breeds/search?q=${id}`);
      if (response?.data && response?.data.length > 0) {
        return response?.data[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
};

export { getCatBreeds, getCatBreedById };
