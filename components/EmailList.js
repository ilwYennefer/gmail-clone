import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import EmailRow from "./EmailRow";
import Section from "./Section";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function EmailList({ emails }) {
  const [realtimeEmails, loading, error] = useCollection(
    db.collection("emails").orderBy("timestamp", "desc")
  );

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {realtimeEmails
          ? realtimeEmails?.docs.map((email) => (
              <EmailRow
                key={email.id}
                id={email.id}
                title={email.data().to}
                subject={email.data().subject}
                description={email.data().message}
                timestamp={email.data().timestamp}
              />
            ))
          : emails.map((email) => (
              <EmailRow
                key={email.id}
                id={email.id}
                title={email.to}
                subject={email.subject}
                description={email.message}
                timestamp={email.timestamp}
              />
            ))}
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
        <EmailRow
          title="elon@tesla"
          subject="test"
          description="sdajndskajndsakjnsadjnasdkjnasdjasdnkjadsnkads"
        />
      </div>
    </div>
  );
}

export default EmailList;
