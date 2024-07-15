<template>
  <div class="pagination">
    <button class="paginationButton" @click="navigatePage(-1)"
            :disabled="currentPage === 1">&#60;</button>
    <button
        v-for="pageNumber in visiblePages"
        :key="pageNumber"
        :class="['paginationButton', { selected: pageNumber === currentPage }]"
        @click="goToPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <button class="paginationButton" @click="navigatePage(1)"
            :disabled="currentPage === totalPages">&#62;</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
      totalPages: 15,
    };
  },
  computed: {
    visiblePages() {
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(start + 4, this.totalPages);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
  },
  methods: {
    navigatePage(change) {
      this.currentPage = Math.max(1, Math.min(this.currentPage + change, this.totalPages));
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: 50px 0;
}

.paginationButton {
  background: #ffffff;
  width: 32px;
  height: 32px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 17.7px;
  font-size: 13px;
  border-radius: 50%;
  border: 1px solid #dddddd; /* Light border color */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}

.paginationButton:hover {
  border-color: #cccccc;
}

.paginationButton:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.selected {
  background: #00CCFF;
  color: #ffffff;
}
</style>
