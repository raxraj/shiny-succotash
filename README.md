# Submission

## Stress Testing the server 

I prefer writing code in JavaScript and thus I have used `k6` to run the tests using the following script.

```sh
k6 run stress_test.js
```

In the test results I was able to identify that the system can take approx `900` Virtual users with n number of iterations without any trouble.

### Spike Testing

The 3rd scenario in the testing was to spike the Virtual User to directly `900` and then stay at that limit for `2 minutes` to understand how the server is responding on continuous spikes.

## Understanding of the current Implementation

The idea of the given Implementation is to actually collect user input to be able to provide them consultancy based by using the AI system that `LegalAI` has been working on.

### Deciding the Technologies

1. Since the Data is so random and has nesting to multiple level, the choice of the database for me boils down to `Document based Database` like `mongodb`.

2. Back-end Technology: The implementation requires quick transactions so as to be able to save the data on the go and respond quickly based on the response - `nodeJS with GraphQL` can be used to implement the backend, although service like firebase might also come-in handy. And final decision would be depending on the level of customisation we need to do on the data before putting it to the database.
With `Firebase` we need to change the db as well and we might use `Cloud Firestore` for that.

3. The Front-end is complex as the rendering of multiple form eleemnts based on the response and the features like `virutal DOM` etc are gonna be helpful for us to implement this in the most efficient and yet with a better performance. `React`

I prefer the things to be verbose as they provide more control and thus I will be going with the `MQRN` Stack.

### More Information

I think the application seems to simple transaction based application and thus unstructured data can directly be feed into the Backend service by `GraphQL.`

I would make a single ingest API and throught that data would constantly be updated.
Will make a unique ID for the connection/user and allow me to save the data with no worries.