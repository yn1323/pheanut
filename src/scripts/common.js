export default {
  screen: () => {
    // 幅に対する比率
    const RATIO = 1.77
    const WIDTH =
      window.innerHeight > window.innerWidth ? window.innerWidth : 500
    const HEIGHT = WIDTH * RATIO
    return {width: WIDTH, height: HEIGHT}
  }
}
