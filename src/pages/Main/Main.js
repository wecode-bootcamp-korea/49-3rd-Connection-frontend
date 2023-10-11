import React from 'react';
import Button from '../../components/Button/Button';

const Main = () => {
  return (
    <>
      <Button />
      <Button color="primary" size="large" />
      <Button color="secondary" size="small" />
      <Button full="true" disabled />
      <hr style={{ margin: '50px 0' }} />
      <Button shape="outline" />
      <Button shape="outline" color="primary" size="small" />
      <Button shape="outline" color="secondary" size="large" />
      <hr style={{ margin: '50px 0' }} />
      <Button shape="round" />
      <Button shape="round" color="primary" size="large" />
      <Button shape="round" color="secondary" size="small" />
    </>
  );
};

export default Main;
