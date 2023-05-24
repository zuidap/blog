/** @format */

import Lottie from 'lottie-web';
import { useEffect, useImperativeHandle, useRef } from 'react';

function LottieView(props) {
  const { jsonPath, childRef } = props;
  const lottieRef = useRef(null);
  const anim = useRef(null);
  //初始化动画
  function initLottie(path) {
    anim.current = Lottie.loadAnimation({
      path: path,
      container: lottieRef.current,
      loop: true,
      autoplay: true,
      renderer: 'svg',
    });
  }

  function start() {
    anim.current.play();
  }
  function stop() {
    anim.current.pause();
  }

  useImperativeHandle(
    childRef,
    () => {
      return { start, stop };
    },
    []
  );

  useEffect(() => {
    // console.log("anim加载");
    initLottie(jsonPath);

    return () => {
      // console.log("卸载");
      anim.current.destroy();
    };
  }, [jsonPath]);

  return <div ref={lottieRef}></div>;
}

export default LottieView;
