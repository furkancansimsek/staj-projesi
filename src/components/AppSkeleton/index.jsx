import React from 'react'
import { Skeleton } from 'antd';

const AppSkeleton = ({ children, loading }) => {
    return (
        <Skeleton active loading={loading}>
            {children}
        </Skeleton>
    )
}

export default AppSkeleton