<template>
  <div class="detail-stat">
    <div class="detail-stat-left">
      <div class="detail-stat-wrapper">
        <span class="detail-stat-rate">{{rankAvg}}</span>
        <van-rate
          :value="rankAvg"
          disabled
        />
      </div>
      <div class="detail-stat-number">{{rankNum}}人评分</div>
    </div>
    <div class="detail-stat-right">
      <div class="reader-num-wrapper">
        <span class="reader-num">{{readerNum}}</span>万人在读
      </div>
      <div class="readers">
        <div class="readers-avatar" v-for="(reader, index) in readers" :key="index">
          <ImageView
            mode="scaleToFill"
            height="100%"
            :src="reader.avatarUrl"
            round
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'
  export default {
    name: 'DetailStat',
    props: {
      readers: Array,
      readerNum: {
        type: Number,
        default: 0
      },
      rankNum: {
        type: Number,
        default: 0
      },
      rankAvg: {
        type: Number,
        default: 0
      }
    },
    components: {
      ImageView
    }
  }
</script>

<style scoped lang="scss">
  .detail-stat {
    display: flex;
    padding: 0 21px;
    justify-content: space-between;
    .detail-stat-left {
      .detail-stat-wrapper {
        display: flex;
        align-items: center;

        .detail-stat-rate {
          font-size: 24px;
          color: #5E5E5E;
          margin-right: 10px;
        }
      }
      .detail-stat-number {
        font-size: 11px;
        color: #99A0AA;
        line-height: 14px;
        margin-top: 3px;
      }
    }
    .detail-stat-right {
      .reader-num-wrapper {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #99A0AA;
        .reader-num {
          font-size: 22px;
          color: #5E5E5E;
          margin-right: 3px;
        }
      }
      .readers {
        display: flex;
        margin-top: 3px;
        .readers-avatar {
          margin-left: -4.5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
