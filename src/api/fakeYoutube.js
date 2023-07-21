import axios from "axios";

export default class FakeYoutube {
  // 로직 노출을 막기 위해 private으로 선언
  constructor() {}
  search = async (keyword) => {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  };

  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
