const addButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

let noteIdCounter = 0;

addButton.addEventListener('click', () => {
  const noteDiv = document.createElement('div');
  noteDiv.id = `note-${noteIdCounter}`;
  noteDiv.className = 'note';
  noteDiv.innerHTML = `<textarea></textarea><button class="delete">Delete</button>`;

  const textarea = noteDiv.querySelector('textarea');
  const deleteButton = noteDiv.querySelector('.delete');

  textarea.focus();

  deleteButton.addEventListener('click', () => {
    noteDiv.remove();
  });

  notesDiv.appendChild(noteDiv);
  noteIdCounter++;
});