package org.tektutor;

import java.util.ArrayList;

import org.springframework.data.couchbase.core.query.N1qlPrimaryIndexed;
import org.springframework.data.couchbase.core.query.Query;
import org.springframework.data.couchbase.core.query.ViewIndexed;
import org.springframework.data.couchbase.repository.CouchbaseRepository;

@N1qlPrimaryIndexed
@ViewIndexed(designDoc="order")
public interface OrderRepository extends CouchbaseRepository<Order, Integer> {

    ArrayList<org.tektutor.Order> findAll();
	
    ArrayList<org.tektutor.Order> findById(int id);
	
    ArrayList<org.tektutor.Order> findByCustomerId(int customerId);
}
