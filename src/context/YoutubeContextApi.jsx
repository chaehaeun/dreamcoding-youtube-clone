import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export const YoutubeContextApi = createContext();
const youtube = new FakeYoutube();

// YoutubeContextApiProvider 컴포넌트를 생성
// Youtube 클래스의 인스턴스를 YoutubeContextApi.Provider를 통해 자식 컴포넌트에 제공합
// 하위 컴포넌트들은 YoutubeContextApi.Consumer나 useYoutubeApi를 통해 인스턴스에 접근할 수 있음
export const YoutubeContextApiProvider = ({ children }) => {
  return (
    // Youtube 클래스의 인스턴스인 youtube를 value로 설정하여 Provider를 생성
    <YoutubeContextApi.Provider value={{ youtube }}>
      {children}
    </YoutubeContextApi.Provider>
  );
};

// 커스텀 훅 useYoutubeApi를 생성
// 이 훅을 사용하면 Youtube 클래스의 인스턴스에 접근할 수 있음
export const useYoutubeApi = () => {
  return useContext(YoutubeContextApi);
};
