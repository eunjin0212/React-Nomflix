import React from "react";
import HomePresenter from "./HomePresenter";
export default class extends React.Component {
  state = {
    upcoming: null,
    nowPlaying: null,
    popular: null,
    error: null,
    loading: true,
  };

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
