using System;

abstract class Mediator
{
    public abstract void SendMessage(string message, User user);
}

abstract class User
{
    protected Mediator mediator;
    protected string name;

    public User(Mediator mediator, string name)
    {
        this.mediator = mediator;
        this.name = name;
    }

    public virtual void Send(string message)
    {
        mediator.SendMessage(message, this);
    }

    public virtual void Receive(string message)
    {
        Console.WriteLine($"{name} received: {message}");
    }
}

class ChatMediator : Mediator
{
    private List<User> users = new List<User>();

    public void AddUser(User user)
    {
        users.Add(user);
    }

    public override void SendMessage(string message, User sender)
    {
        foreach (var user in users)
        {
            if (user != sender)
                user.Receive(message);
        }
    }
}

class ConcreteUser : User
{
    public ConcreteUser(Mediator mediator, string name) : base(mediator, name) { }
}

class Program
{
    static void Main()
    {
        ChatMediator mediator = new ChatMediator();

        User user1 = new ConcreteUser(mediator, "Alice");
        User user2 = new ConcreteUser(mediator, "Bob");
        User user3 = new ConcreteUser(mediator, "Charlie");

        mediator.AddUser(user1);
        mediator.AddUser(user2);
        mediator.AddUser(user3);

        user1.Send("Hello, everyone!");
        user2.Send("Hi, Alice!");
    }
}