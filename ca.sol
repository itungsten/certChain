pragma solidity ^0.4.19;
contract CA {
    mapping(string => string) certs;
    event printCert(string email,string cert);
    address owner;
    constructor() public{
      owner = msg.sender;
	}
    function setCert(string _email, string _cert) public {
    	require(msg.sender==owner);
        certs[_email] = _cert;
        emit printCert(_email,_cert);
    }
    
    function getCert(string _email) public view returns (string) {
        return certs[_email];
    }
}