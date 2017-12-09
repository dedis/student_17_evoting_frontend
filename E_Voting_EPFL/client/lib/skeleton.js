export default '{"nested":{"Election":{"fields":{"name":{"rule":"required","type":"string","id":1},"creator":{"rule":"required","type":"uint32","id":2},"start":{"rule":"required","type":"string","id":3},"end":{"rule":"required","type":"string","id":4},"users":{"rule":"repeated","type":"uint32","id":5,"options":{"packed":false}},"key":{"type":"bytes","id":6},"description":{"type":"string","id":7}}},"Ballot":{"fields":{"sciper":{"rule":"required","type":"uint32","id":1},"alpha":{"rule":"required","type":"bytes","id":2},"beta":{"rule":"required","type":"bytes","id":3},"clear":{"type":"bytes","id":4}}},"Box":{"fields":{"ballots":{"rule":"repeated","type":"Ballot","id":1,"options":{"packed":false}}}},"Login":{"fields":{"sciper":{"rule":"required","type":"uint32","id":1},"gaspar":{"rule":"required","type":"string","id":2},"signature":{"rule":"required","type":"bytes","id":3}}},"LoginReply":{"fields":{"token":{"rule":"required","type":"string","id":1},"elections":{"rule":"repeated","type":"Election","id":2,"options":{"packed":false}}}},"OpenElection":{"fields":{"token":{"rule":"required","type":"string","id":1},"election":{"rule":"required","type":"Election","id":2}}},"OpenElectionReply":{"fields":{"genesis":{"rule":"required","type":"bytes","id":1}}},"CastBallot":{"fields":{"token":{"rule":"required","type":"string","id":1},"genesis":{"rule":"required","type":"bytes","id":2},"ballot":{"rule":"required","type":"Ballot","id":3}}},"CastBallotReply":{"fields":{"block":{"rule":"required","type":"bytes","id":1}}},"Finalize":{"fields":{"token":{"rule":"required","type":"string","id":1},"genesis":{"rule":"required","type":"bytes","id":2}}},"FinalizeReply":{"fields":{"token":{"rule":"required","type":"string","id":1},"shuffle":{"rule":"required","type":"bytes","id":2},"decryption":{"rule":"required","type":"bytes","id":3}}},"Aggregate":{"fields":{"token":{"rule":"required","type":"string","id":1},"genesis":{"rule":"required","type":"bytes","id":2},"type":{"rule":"required","type":"Type","id":3}},"nested":{"Type":{"values":{"BALLOTS":0,"SHUFFLE":1,"DECRYPTION":2}}}},"AggregateReply":{"fields":{"box":{"rule":"required","type":"Box","id":1}}}}}';