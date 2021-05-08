pragma solidity ^0.4.19;
contract CA {
    mapping(string => string) certs;
    mapping(address => bool) whiteList;
    address owner;

    event certEvent(string email,string cert);
    event docEvent(string email,string hash);
    event listEvent(address corp,bool status);
    constructor() public{
      owner = msg.sender;
      whiteList[msg.sender]=true;
	}
    function setCert(string _email, string _cert) public {
    	require(whiteList[msg.sender]==true);
        certs[_email] = _cert;
        emit certEvent(_email,_cert);
    }
    function getCert(string _email) public view returns (string) {
        return certs[_email];
    }
    function signDoc(string _email, string _hash) public {
    	emit docEvent(_email,_hash);
    }
    function setList(address _corp,bool _status) public {
    	require(msg.sender==owner);
        whiteList[_corp]=_status;
        emit listEvent(_corp,_status);
    }
    function getList(address _corp) public view returns (bool) {
        return whiteList[_corp];
    }
}