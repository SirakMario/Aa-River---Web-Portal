import { createComparator } from "/static/js/PointCloudComparator.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("on DOMContentLoaded create LIDAr compartor");

  // Comparison of Point Cloud from the LIDAR
  createComparator(
    ".pcd-container",
    ".slider",
    "/static/js/processed2022_subsampled.pcd",
    "/static/js/cloud8786d920b00cdd1a_subsampled.pcd"
  );
});
