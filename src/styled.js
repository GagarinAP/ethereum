import styled from 'styled-components';

const Failure = styled.div`
	color: red;
	font-weight: 600;
	font-size: 12px;
	margin: 10px;
`;

const Success = styled.div`
	color: green;
	font-weight: 600;
	font-size: 12px;
	margin: 10px;
`;

const Btn = styled.button`
	outline: 0 !important;
`;

const Block = styled.div`
	padding-top: 100px;
`;

const Loader = styled.div`
	position: absolute;
  right: 60px;
  top: 6px;
	border: 10px solid #f1f1f1;
  border-top: 10px solid #bfbfbf;
  border-bottom: 10px solid #bfbfbf;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  outline: 0 !important;
    
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
	}
`;

export {Failure, Success, Btn, Block, Loader}