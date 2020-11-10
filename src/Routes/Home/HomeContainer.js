import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";
export default class extends React.Component {
  // eslint-disable-line no-unused-vars
  state = {
    upcoming: null,
    nowPlaying: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results },
      } = await moviesApi.nowPlaying();
      console.log(results);
    } catch {
      this.setState({
        error: "Can't find movies information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
