<template>
  <div class="main">
    <div class="me-detail-view">
      <header>
        <div class="left">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="title">
          <div data-v-2475a5f8 style>我的资料</div>
        </div>
        <div class="right"></div>
      </header>
      <!-- 修改选项 -->
      <div class="me-detail" style>
        <div class="item-box">
          <div class="head">
            <div class="label">头像</div>
            <div class="value">
              <input type="file" accept="image/*" id="file_head" class="file-head">
              <img width="50px" height="50px" class="head-icon">
            </div>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="common nickname">
            <div class="label">昵称</div>
            <div class="value show-nickname">131****1979</div>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="common gender">
            <div class="label">性别</div>
            <div class="value">未设置</div>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="common birthday">
            <div class="label">出生日期</div>
            <div class="value">未设置</div>
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
      </div>
      <!-- 更改昵称 -->
      <div class="edit-view" style="display: none;">
        <div class="edit-header">
          <div class="left">
            <i class="iconfont icon-zuojiantou"></i>
          </div>
          <div class="title">更改昵称</div>
          <div class="right save"></div>
        </div>
        <div class="edit-nickname">
          <div class="name-box">
            <input placeholder="新昵称" maxlength="20" class="name-input">
            <div class="clear-name-btn">
              <i class="iconfont icon-chongzhi-qingchu" style></i>
            </div>
          </div>
          <div class="tip">支持中英文、数字、“_”</div>
        </div>
      </div>
      <!-- 修改出生年月 -->
      <div class="mint-popup mint-datetime date-box mint-popup-bottom" style="z-index: 2001; display: none;">
        <div class="picker mint-datetime-picker">
          <div class="picker-toolbar">
            <span class="mint-datetime-action mint-datetime-cancel">取消</span>
            <span class="mint-datetime-action mint-datetime-confirm">确认</span>
          </div>
          <div class="picker-items">
            <div class="picker-slot picker-slot-center" style="flex: 1 1 0%; -webkit-box-flex: 1;">
              <div
                class="picker-slot-wrapper"
                style="height: 252px; transform: translate(0px, -3492px) translateZ(0px);"
              >
                <div class="picker-item" style="height: 36px; line-height: 36px;">1900 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1901 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1902 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1903 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1904 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1905 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1906 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1907 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1908 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1909 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1910 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1911 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1912 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1913 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1914 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1915 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1916 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1917 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1918 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1919 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1920 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1921 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1922 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1923 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1924 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1925 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1926 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1927 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1928 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1929 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1930 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1931 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1932 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1933 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1934 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1935 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1936 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1937 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1938 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1939 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1940 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1941 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1942 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1943 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1944 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1945 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1946 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1947 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1948 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1949 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1950 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1951 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1952 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1953 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1954 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1955 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1956 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1957 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1958 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1959 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1960 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1961 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1962 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1963 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1964 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1965 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1966 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1967 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1968 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1969 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1970 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1971 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1972 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1973 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1974 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1975 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1976 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1977 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1978 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1979 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1980 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1981 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1982 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1983 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1984 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1985 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1986 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1987 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1988 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1989 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1990 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1991 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1992 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1993 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1994 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1995 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1996 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1997 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1998 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">1999 年</div>
                <div
                  class="picker-item picker-selected"
                  style="height: 36px; line-height: 36px;"
                >2000 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2001 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2002 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2003 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2004 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2005 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2006 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2007 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2008 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2009 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2010 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2011 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2012 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2013 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2014 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2015 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2016 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2017 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2018 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2019 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2020 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2021 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2022 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2023 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2024 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2025 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2026 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2027 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2028 年</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">2029 年</div>
              </div>
              <!---->
            </div>
            <div class="picker-slot picker-slot-center" style="flex: 1 1 0%; -webkit-box-flex: 1;">
              <div
                class="picker-slot-wrapper"
                style="height: 252px; transform: translate(0px, 108px) translateZ(0px);"
              >
                <div
                  class="picker-item picker-selected"
                  style="height: 36px; line-height: 36px;"
                >01 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">02 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">03 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">04 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">05 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">06 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">07 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">08 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">09 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">10 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">11 月</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">12 月</div>
              </div>
              <!---->
            </div>
            <div class="picker-slot picker-slot-center" style="flex: 1 1 0%; -webkit-box-flex: 1;">
              <div
                class="picker-slot-wrapper"
                style="height: 252px; transform: translate(0px, 108px) translateZ(0px);"
              >
                <div
                  class="picker-item picker-selected"
                  style="height: 36px; line-height: 36px;"
                >01 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">02 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">03 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">04 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">05 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">06 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">07 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">08 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">09 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">10 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">11 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">12 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">13 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">14 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">15 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">16 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">17 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">18 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">19 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">20 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">21 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">22 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">23 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">24 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">25 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">26 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">27 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">28 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">29 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">30 日</div>
                <div class="picker-item" style="height: 36px; line-height: 36px;">31 日</div>
              </div>
              <!---->
            </div>
            <div class="picker-center-highlight" style="height: 36px; margin-top: -18px;"></div>
          </div>
        </div>
      </div>
      <!-- 修改性别 -->
      <div class="mint-actionsheet gender-box" style="z-index: 2003; display: none;">
        <ul class="mint-actionsheet-list" style="margin-bottom: 5px;">
          <li class="mint-actionsheet-listitem">更改性别</li>
          <li class="mint-actionsheet-listitem">男</li>
          <li class="mint-actionsheet-listitem">女</li>
        </ul>
        <a class="mint-actionsheet-button">取消</a>
      </div>
    </div>
    <!---->
  </div>
</template>
<style lang="less">
.main {
  height: 100%;
}
</style>
