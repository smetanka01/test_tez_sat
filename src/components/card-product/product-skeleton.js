import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
   <ContentLoader
      speed={2}
      width={255}
      height={397}
      viewBox="0 0 255 397"
      backgroundColor="#dedede"
      foregroundColor="#c7c7c7"
      {...props}
   >
      <rect x="0" y="0" rx="6" ry="6" width="255" height="206" />
      <rect x="0" y="224" rx="0" ry="0" width="159" height="25" />
      <rect x="222" y="224" rx="0" ry="0" width="33" height="25" />
      <rect x="0" y="282" rx="0" ry="0" width="255" height="55" />
      <rect x="0" y="366" rx="0" ry="0" width="255" height="26" />
   </ContentLoader>
)

export default ProductSkeleton