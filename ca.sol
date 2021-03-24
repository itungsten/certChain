pragma solidity ^0.4.19;
contract CA {
    mapping(string => string) certs;
    address owner;

    event certEvent(string email,string cert);
    event docEvent(string email,string hash);
    constructor() public{
      owner = msg.sender;
	}
    function setCert(string _email, string _cert) public {
    	require(msg.sender==owner);
        certs[_email] = _cert;
        emit certEvent(_email,_cert);
    }
    
    function getCert(string _email) public view returns (string) {
        return certs[_email];
    }

    function signDoc(string _email, string _hash) public {
    	emit docEvent(_email,_hash);
    }
}