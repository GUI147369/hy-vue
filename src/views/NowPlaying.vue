<template>
  <!--正在热映列表-->
  <div class="nowPlayingList-wrap">
    <ul class="nowPlayingList">
      <li class="nowPlayingFilm-item" v-for='item in nowFilmList' :key='item.id'>
        <a href class="nowPlayingFilm-wrap">
          <div class="nowPlayingFilm-img">
            <img :src="item.imgUrl">
          </div>
          <div class="nowPlayingFilm-info">
            <div class="nowPlayingFilm-name info-col">
              <span class="name">{{item.name}}</span>
              <span class="item">2D</span>
            </div>
            <div class="nowPlayingFilm-grade info-col">
              <span class="label">观众评分</span>
              <span class="grade">8.0</span>
            </div>
            <div class="nowPlayingFilm-actors info-col">
              <span class="label">主演：郭帆，屈楚萧，李光洁，吴孟达 ，赵今麦</span>
            </div>
            <div class="nowPlayingFilm-detail info-col">
              <span class="label">中国大陆 &nbsp;| 100分钟</span>
            </div>
          </div>
          <div class="nowPlayingFilm-buy">购票</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      nowFilmList: []
    }
  },
  created () {
    axios.get('http://localhost:3000/film/search', {
      params: {
        pageSize: 4
      }
    }).then((res) => {
      console.log(res.data.data)
      this.nowFilmList = res.data.data
    })
  }
}
</script>
<style lang="less">
  /* wrap */
.nowPlayingList-wrap {
  width: 360px;
  box-sizing: border-box;
  // ul
  .nowPlayingList {
    margin-left: 15px;
    // li
    .nowPlayingFilm-item {
      padding: 15px 15px 15px 0;
      height: 90px;
      border-bottom: 1px solid #C2C2C2;
      // ul li a
      .nowPlayingFilm-wrap {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* 正在热映 影片图片 */
        .nowPlayingFilm-img {
          height: 100%;
          img {
            height: 100%;
          }
        }
        /* 正在热映 影片信息 */
        .nowPlayingFilm-info {
          padding: 0 10px;
          /* 正在热映 影片信息 影片名 */
          .nowPlayingFilm-name .name {
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
          }
          /* 2D */
          .nowPlayingFilm-name .item {
            font-size: 10px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
          // 评分
          .grade {
            font-size: 16px;
            color: #ffb232
          }
          /* 省略号 */
          .info-col {
            width: 200px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          /* 正在热映 影片信息公共样式 */
          .label {
            font-size: 13px;
            color: #797d82;
          }
        }
        .nowPlayingFilm-buy {
          line-height: 25px;
          height: 25px;
          width: 50px;
          color: #ff5f16;
          font-size: 14px;
          text-align: center;
          border-radius: 2px;
          border: 1px solid #ff5f16;
        }
      }
    }
  }
}
</style>
