import React, { FC } from 'react';
import { HomeComponentWrapper } from './HomeComponent.styled';

interface HomeComponentProps {}

const HomeComponent: FC<HomeComponentProps> = () => (
 <HomeComponentWrapper>
    HomeComponent Component: ich bin da
 </HomeComponentWrapper>
);

export default HomeComponent;
