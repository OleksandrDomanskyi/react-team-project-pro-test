import contacts from "./teamData";
import ContactCard from "./ContactCard";
import s from "./contactList.module.scss";

const ContactList = () => {
  const elements = contacts.map((contact) => (
    <ContactCard key={contact.id} {...contact} />
  ));
  return (
    <section className={s.section}>
      <p className={s.title}></p>
      <div className={s.list}>{elements}</div>
    </section>
  );
};

export default ContactList;
