<template>
  <view
    class="clock"
    :class="[bglight ? 'light' : 'dark']"
    @click="screenClick"
  >
    <view class="container">
      <view class="hour-part">
        <view class="flip hourplay2" ref="hourplay2">
          <view :class="[!h2.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  !h2.active ? h2.n && h2.n.active : h2.n && h2.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  !h2.active ? h2.n && h2.n.active : h2.n && h2.n.before
                }}</view>
              </view>
            </view>
          </view>
          <view :class="[h2.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  h2.active ? h2.n && h2.n.active : h2.n && h2.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  h2.active ? h2.n && h2.n.active : h2.n && h2.n.before
                }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="flip hourplay">
          <view :class="[!h.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  !h.active ? h.n && h.n.active : h.n && h.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  !h.active ? h.n && h.n.active : h.n && h.n.before
                }}</view>
              </view>
            </view>
          </view>
          <view :class="[h.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  h.active ? h.n && h.n.active : h.n && h.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  h.active ? h.n && h.n.active : h.n && h.n.before
                }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="blinker">:</view>
      <view class="minute-part">
        <view class="flip minuteplay2">
          <view :class="[!m2.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  !m2.active ? m2.n && m2.n.active : m2.n && m2.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  !m2.active ? m2.n && m2.n.active : m2.n && m2.n.before
                }}</view>
              </view>
            </view>
          </view>
          <view :class="[m2.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  m2.active ? m2.n && m2.n.active : m2.n && m2.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  m2.active ? m2.n && m2.n.active : m2.n && m2.n.before
                }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="flip minuteplay">
          <view :class="[!m.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  !m.active ? m.n && m.n.active : m.n && m.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  !m.active ? m.n && m.n.active : m.n && m.n.before
                }}</view>
              </view>
            </view>
          </view>
          <view :class="[m.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  m.active ? m.n && m.n.active : m.n && m.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  m.active ? m.n && m.n.active : m.n && m.n.before
                }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="blinker">:</view>
      <view class="second-part">
        <view class="flip secondplay2">
          <view :class="[!s2.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  !s2.active ? s2.n && s2.n.active : s2.n && s2.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  !s2.active ? s2.n && s2.n.active : s2.n && s2.n.before
                }}</view>
              </view>
            </view>
          </view>
          <view :class="[s2.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  s2.active ? s2.n && s2.n.active : s2.n && s2.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  s2.active ? s2.n && s2.n.active : s2.n && s2.n.before
                }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="flip secondplay">
          <view :class="[!s.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  !s.active ? s.n && s.n.active : s.n && s.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  !s.active ? s.n && s.n.active : s.n && s.n.before
                }}</view>
              </view>
            </view>
          </view>
          <view :class="[s.active ? 'active' : 'before']">
            <view>
              <view class="up">
                <view class="shadow"></view>
                <view class="inn">{{
                  s.active ? s.n && s.n.active : s.n && s.n.before
                }}</view>
              </view>
              <view class="down">
                <view class="shadow"></view>
                <view class="inn">{{
                  s.active ? s.n && s.n.active : s.n && s.n.before
                }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="bgset" @click="changeBg" :animation="animationData">
      <view :class="['icon', bglight ? 'sun' : 'moon']"></view>
    </view>
  </view>
</template>

<script>
import { debounce } from '../../common/utils/common.js';
export default {
  data() {
    return {
      h2: {
        active: true,
        n: {
          active: '0',
          before: '0',
        },
      },
      h: {
        active: true,
        n: {
          active: '0',
          before: '0',
        },
      },
      m2: {
        active: true,
        n: {
          active: '0',
          before: '0',
        },
      },
      m: {
        active: true,
        n: {
          active: '0',
          before: '0',
        },
      },
      s2: {
        active: true,
        n: {
          active: '0',
          before: '0',
        },
      },
      s: {
        active: true,
        n: {
          before: '0',
          active: '0',
        },
      },
      bglight: false, // 背景亮模式，默认暗
      showBgChangeBtn: true, // 显示按钮
      animationData: {},
    };
  },
  onLoad() {
    //#ifndef H5
    // 保持屏幕常亮
    uni.setKeepScreenOn({
      keepScreenOn: true,
    });
    //#endif
    this.animate = uni.createAnimation({
      transformOrigin: '50% 50%',
      duration: 500,
      timingFunction: 'linear',
    });

    //#ifdef APP-PLUS
    // 全屏
    plus.navigator.setFullscreen(true);
    //#endif
    this.clockInit();
  },
  onShow() {
    this.clockRun();
  },
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  methods: {
    // 屏幕点击
    screenClick: debounce(function () {
      this.showBgChangeBtn = !this.showBgChangeBtn;
      if (this.showBgChangeBtn) {
        this.animate.width('80rpx').height('80rpx').opacity(1).step();
        this.animationData = this.animate.export();
      } else {
        this.animate.width('0rpx').height('0rpx').opacity(0).step();
        this.animationData = this.animate.export();
      }
    }, 500),
    // 背景色切换
    changeBg: debounce(function () {
      this.bglight = !this.bglight;
    }, 500),
    setHour() {
      let currentHour = this._getTime().h.split('');
      if (this.h.n.active !== currentHour[1]) {
        this.h.n.before = this.h.n.active;
        this.h.active = !this.h.active;
        this.h.n.active = currentHour[1];
      }

      if (this.h2.n.active !== currentHour[0]) {
        this.h2.n.before = this.h2.n.active;
        this.h2.active = !this.h2.active;
        this.h2.n.active = currentHour[0];
      }
    },
    setMinute() {
      let currentMinute = this._getTime().m.split('');

      if (this.m.n.active !== currentMinute[1]) {
        this.m.n.before = this.m.n.active;
        this.m.active = !this.m.active;
        this.m.n.active = currentMinute[1];
      }

      if (this.m2.n.active !== currentMinute[0]) {
        this.m2.n.before = this.m2.n.active;
        this.m2.active = !this.m2.active;
        this.m2.n.active = currentMinute[0];
      }
    },
    setSecond() {
      let currentSecond = this._getTime().s.split('');

      if (this.s.n.active !== currentSecond[1]) {
        this.s.n.before = this.s.n.active;
        this.s.active = !this.s.active;
        this.s.n.active = currentSecond[1];
      }

      if (this.s2.n.active !== currentSecond[0]) {
        this.s2.n.before = this.s2.n.active;
        this.s2.active = !this.s2.active;
        this.s2.n.active = currentSecond[0];
      }
    },
    clockInit() {
      this.setHour();
      this.setMinute();
      this.setSecond();
    },
    clockRun() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        this.setHour();
        this.setMinute();
        this.setSecond();
      }, 1000);
    },
    _getTime() {
      let time = new Date();
      let hour = time.getHours();
      let minute = time.getMinutes();
      let second = time.getSeconds();

      return {
        h: hour.toString().padStart(2, '0'),
        m: minute.toString().padStart(2, '0'),
        s: second.toString().padStart(2, '0'),
      };
    },
  },
};
</script>

<style lang="scss">
.clock {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  color: #888;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  font-family: myfont;
  transition: background 1s;
  &.dark {
    background: #000;
  }

  &.light {
    background-color: #fff;
  }

  .container {
    display: flex;
    text-align: center;

    > view {
      display: flex;
    }
  }
}

view {
  &.flip {
    width: 88rpx;
    height: 132rpx;
    line-height: 128rpx;
    font-size: 112rpx;
    font-weight: bold;
    margin: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    position: relative;

    > view {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;

      > view {
        height: 100%;
        color: #ccc;
        perspective: 200px;

        view {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          left: 0;
          z-index: 1;

          .shadow {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
          }

          .inn {
            position: absolute;
            width: 100%;
            height: 200%;
            color: #ccc;
            text-shadow: 0 1px 2px #000;
            background-color: #333;
            border-radius: 4px;
            left: 0;
            z-index: 1;
          }

          &.up {
            transform-origin: 50% 100%;
            top: 0;

            &::after {
              content: '';
              width: 100%;
              height: 3px;
              background-color: rgba(0, 0, 0, 0.4);
              position: absolute;
              left: 0;
              bottom: -2px;
              z-index: 5;
            }

            .inn {
              top: 0;
            }
          }

          &.down {
            transform-origin: 50% 0;
            bottom: 0;

            .inn {
              bottom: 0;
            }
          }
        }
      }

      &.before {
        z-index: 3;

        .up {
          z-index: 2;
          animation: turn2 0.5s linear both;

          .shadow {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.1) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            animation: show 0.5s linear both;
          }
        }

        .down {
          .shadow {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.1) 100%
            );
            animation: show 0.5s linear both;
          }
        }
      }

      &.active {
        z-index: 2;
        animation: asd 0.5s 0.5s linear both;

        .up {
          .shadow {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.1) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            animation: hide 0.5s 0.3s linear both;
          }
        }

        .down {
          z-index: 2;
          animation: turn 0.5s 0.5s linear both;

          .shadow {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.1) 100%
            );
            animation: hide 0.5s 0.3s linear both;
          }
        }
      }
    }
  }
}

.blinker {
  line-height: 124rpx;
  font-size: 112rpx;
  color: #333;
}

.bgset {
  width: 80rpx;
  height: 80rpx;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: 50%;
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .moon {
    background-image: url(~@/static/img/moon.png);
  }

  .sun {
    background-image: url(~@/static/img/sun.png);
  }
}

@keyframes asd {
  0% {
    z-index: 2;
  }

  5% {
    z-index: 4;
  }

  100% {
    z-index: 4;
  }
}

@keyframes turn {
  0% {
    transform: rotateX(90deg);
  }

  100% {
    transform: rotateX(0deg);
  }
}

@keyframes turn2 {
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@font-face {
  font-family: myfont;
  src: url('~@/static/font/myfont.ttf');
}

@font-face {
  font-family: 'iconfont';
  /* Project id 3193034 */
  src: url('//at.alicdn.com/t/font_3193034_1hsyij25xur.woff2?t=1645278828762')
      format('woff2'),
    url('//at.alicdn.com/t/font_3193034_1hsyij25xur.woff?t=1645278828762')
      format('woff'),
    url('//at.alicdn.com/t/font_3193034_1hsyij25xur.ttf?t=1645278828762')
      format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sun:before {
  content: '\e63c';
}

.icon-moon:before {
  content: '\e662';
}
</style>
