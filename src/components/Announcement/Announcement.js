import React from 'react';
import AnnouncementBackdrop from './AnnouncementBackdrop';
import AnnouncementMessage from './AnnouncementMessage';
import AnnouncementModal from './AnnouncementModal';

const Announcement = () => {
  return (
    <AnnouncementBackdrop>
      <AnnouncementModal>
        <AnnouncementMessage>
          message
          <button>Play Again!</button>
        </AnnouncementMessage>
      </AnnouncementModal>
    </AnnouncementBackdrop>
  );
};

export default Announcement;
