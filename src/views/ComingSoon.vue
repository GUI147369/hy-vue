<template>
  <!-- 即将上映列表 -->
  <div class="comingSoonList-wrap">
    <ul class="comingSoonList">
      <li class="comingSoonFilm-item" v-for="item in soonFilmList" :key="item._id">
        <a href class="comingSoonFilm-wrap">
          <div class="comingSoonFilm-img">
            <img :src="item.imgUrl">
          </div>
          <div class="comingSoonFilm-info">
            <div class="comingSoonFilm-name info-col">
              <span class="name">{{ item.name }}</span>
              <span class="item">2D</span>
            </div>
            <div class="comingSoonFilm-grade info-col">
              <span class="label">&nbsp;</span>
              <span class="grade">&nbsp;</span>
            </div>
            <div class="comingSoonFilm-actors info-col">
              <span class="label">主演：郭帆，屈楚萧，李光洁，吴孟达 ，赵今麦</span>
            </div>
            <div class="comingSoonFilm-detail info-col">
              <span class="label">上映时间 : 2019-4-10</span>
            </div>
          </div>
          <div class="comingSoonFilm-buy">预定</div>
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
      soonFilmList: []
    }
  },
  created () {
    axios.get('http://localhost:3000/film/search', {
      params: {
        pageSize: 4
      }
    }).then(res => {
      // console.log(res.data.data)
      let list = res.data.data.filter((item) => {
        return item.createTime > 1549200916432
      })
      // console.log(list)
      this.soonFilmList = list
    })
  }
}
</script>
<style lang="less">
/* wrap */
.comingSoonList-wrap {
  box-sizing: border-box;
  // ul
  .comingSoonList {
    margin-left: 15px;
    // li
    .comingSoonFilm-item {
      padding: 15px 15px 15px 0;
      height: 90px;
      border-bottom: 1px solid #c2c2c2;
      // ul li a
      .comingSoonFilm-wrap {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* 正在热映 影片图片 */
        .comingSoonFilm-img {
          height: 100%;
          img {
            height: 100%;
          }
        }
        /* 正在热映 影片信息 */
        .comingSoonFilm-info {
          padding: 0 10px;
          /* 正在热映 影片信息 影片名 */
          .comingSoonFilm-name .name {
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
          }
          /* 2D */
          .comingSoonFilm-name .item {
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
            color: #ffb232;
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
        .comingSoonFilm-buy {
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
