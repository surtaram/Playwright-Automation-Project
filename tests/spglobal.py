

from abc import ABC, abstractmethod 


a=[1,2,2,3,4,5,5,5,6]
a=list(set(a))
print(a)

d ={
    "name":"Rekha",
    "age":23,
    "city":"Bhaniyana"
}

print(d["age"])

print(d.keys())
print(d.values())
print(d.items())


for key, value in d.items():
    print(key,":", value)  


def Add(a,b):
    return a+b
print(Add(5,10))


def test(*args):
    for i in args:
        print(i)

test(1,2,3,4,5)


def test(**kwargs):
    for key, value in kwargs.items():
        print(key,":", value)

test(name="Rekha", age=23, city="Bhaniyana")


x=lambda a,b:a+b
print(x(5,10))

a=[x for x in range(1,11) if x%2==0]
print(a)

a=[]

for i in range(1,11):
    a.append(i)


print(a)
a=[i for i in range(1,11)]

print(a)


s="Hello"
s1=s[::-1]
print(s1)


class Person:
    def __init__(self,name):
        self.name=name

p1=Person("Rekha")
print(p1.name)

class Employee:
    def __init__(self):
        self.name='Surta'
        self._salary=50000
        self.__age=30

class LoginPage:
    def __init__(self,driver):
        self.driver=driver

    def login(self):
        print("Logging in with driver:", self.driver)

class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass

class Car(Vehicle):
    def start_engine(self):
        print("Car engine started")

class Bike(Vehicle):
    def start_engine(self):
        print("Bike engine started")
        