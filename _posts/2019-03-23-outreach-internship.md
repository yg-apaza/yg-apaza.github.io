---
layout: post
title: "Starting Outreachy internship"
date: 2017-06-05 18:21:00 -0500
categories: open-source outreachy
published: true
---

I was accepted onto  [Outreachy 2017 May-August](https://wiki.gnome.org/Outreachy/2017/MayAugust#Lagom){:target="\_blank"} round. I'll be working on the Online auction sample app completion and to achieve that I'll use my [Outreachy application](https://docs.google.com/document/d/1OnG3D_9sGTuBBMR03ZAhi98uPhpYCQESWQ1dvY7tv6k/edit?usp=sharing){:target="\_blank"} plan.

## How can I start to contribute to Online Auction Sample App?

You can find the documentation about how to run the application and how to set up the IDE in the [Github repo](https://github.com/lagom/online-auction-java){:target="\_blank"}.

Next steps are more about learning and reading the Lagom framework reference guide. Me, as a beginner, found challenging to understand [Event Sourcing and CQRS](https://www.lagomframework.com/documentation/1.3.x/java/ES_CQRS.html){:target="\_blank"}, mostly because I was comfortable enough with traditional CRUD model.

It's strongly recommended to read ["Reactive Microservices Architecture" by Jonas Bóner](https://info.lightbend.com/COLL-20XX-Reactive-Microservices-Architecture-RES-LP.html){:target="\_blank"}.

## What did I learn before my internship?

Last year I learned a lot about Java 8's new features: Lambda functions, completion stages, functional interfaces, functional programming, etc. Lagom framework uses Java 8. I recommend to learn Cassandra because it's the default database manager that Lagom uses. Also, it won't hurt to learn Akka, Play framework and a bit of Scala. With those skills it's easier to start with Lagom.

## What's next?

If you read the Plan section in my Outreachy application, I broke down the whole project in use cases, so next steps are to implement each of them. I'll be working with [Ruchika Lakhina](https://lakhina.github.io/blog){:target="\_blank"}, we both were accepted to Outreachy :grinning:. Ruchika will work on user service and me on transaction service.