declare module goog.fs {

    /**
     * An object for monitoring the saving of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileSaver.EventType}.
     *
     * This should not be instantiated directly. Instead, its subclass
     * {@link goog.fs.FileWriter} should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     *
     * @param {!FileSaver} fileSaver The underlying FileSaver object.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileSaver extends goog.events.EventTarget {
        constructor(fileSaver: FileSaver);
        
        /**
         * Abort the writing of the file.
         */
        abort(): void;
        
        /**
         * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
        
        /**
         * @return {goog.fs.Error} The error encountered while writing, if any.
         */
        getError(): goog.fs.Error;
    }
}

declare module goog.fs.FileSaver {

    /**
     * Possible states for a FileSaver.
     *
     * @enum {number}
     */
    interface ReadyState {
        INIT: number;
        WRITING: number;
        DONE: number;
    }

    /**
     * Events emitted by a FileSaver.
     *
     * @enum {string}
     */
    interface EventType {
        WRITE_START: string;
        PROGRESS: string;
        WRITE: string;
        ABORT: string;
        ERROR: string;
        WRITE_END: string;
    }
}
