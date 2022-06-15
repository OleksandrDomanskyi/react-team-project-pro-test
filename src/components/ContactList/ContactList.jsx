import contacts from "./teamData";
import ContactCard from "./ContactCard";
import s from "./contactList.module.scss";

const ContactList = () => {
  const elements = contacts.map((contact) => (
    <ContactCard key={contact.id} {...contact} />
  ));
  return (
    <section className="container">
      <h2 className={s.title}>Our Team</h2>
      <div className={s.list}>{elements}</div>
    </section>
  );
};

export default ContactList;
