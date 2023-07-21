import axios from "axios";

export default class Youtube {
  // 로직 노출을 막기 위해 private으로 선언한 클래스의 생성자입니다.
  constructor() {
    // axios를 사용하여 YouTube API와 통신할 httpClient를 생성
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3", // YouTube API base URL
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  // 키워드로 동영상을 검색하거나, 키워드가 없는 경우 인기 동영상을 가져오는 메서드
  search = async (keyword) => {
    // 조건 연산자를 사용하여 keyword 값이 주어진 경우 searchByKeyword 메서드를 호출하고,
    // 그렇지 않은 경우 mostPopular 메서드를 호출하여 결과를 반환
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  };

  // 키워드로 동영상을 검색하는 비공개(private) 메서드
  async #searchByKeyword(keyword) {
    return this.httpClient
      .get(`search`, {
        params: { part: "snippet", q: keyword, type: "video", maxResults: 25 }, // 요청에 필요한 파라미터를 설정
      })
      .then((res) => res.data.items) // API 응답에서 동영상 정보를 추출
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId }))); // 각 항목에서 id.videoId를 id로 복사하여 반환하는 새로운 배열을 생성하여 결과를 가공
  }

  // 인기 동영상을 가져오는 비공개(private) 메서드입니다.
  async #mostPopular() {
    return this.httpClient
      .get(`videos`, {
        params: { part: "snippet", maxResults: 25, chart: "mostPopular" }, // 요청에 필요한 파라미터를 설정
      })
      .then((res) => res.data.items); // API 응답에서 인기 동영상 정보를 추출하여 반환합니다.
  }
}
