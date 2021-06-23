import { deleteNoteData } from '../data/notes.js';
import renderSummary from '../render/renderSummary.js';

export default function deleteNote(delId, item, tableBody) {
  deleteNoteData(delId);
  tableBody.removeChild(item);
  renderSummary();
}
