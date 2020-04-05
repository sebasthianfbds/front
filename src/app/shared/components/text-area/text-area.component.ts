import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"]
})
export class TextAreaComponent implements OnInit {
  @Input() preventEnter = true;
  @Input() name: string = "textarea";
  @Input() placeholder: string;
  @Output() onEnterPress = new EventEmitter<any>();

  @ViewChild("textarea", { static: false, read: ElementRef })
  textarea: ElementRef<HTMLTextAreaElement>;
  constructor() {}

  ngOnInit(): void {}
  resizeTextArea($event) {
    const el = $event.target;
    const enter = 13;
    const ctrlEnter = $event.keyCode === enter && $event.ctrlKey;

    if (this.preventEnter) {
      if (ctrlEnter || $event.keyCode !== enter) {
        if (ctrlEnter) el.value += "\n";
        this.change(el);
      } else {
        $event.preventDefault();
        this.onEnterPress.emit();
      }
    } else {
      if ($event.keyCode === enter) this.onEnterPress.emit();
      this.change(el);
    }
  }

  change(el) {
    el.style.height = "";
    el.style.height = Math.min(el.scrollHeight, 2000) + "px";
  }

  get value() {
    return this.textarea.nativeElement.value || "";
  }
  set value(value) {
    this.textarea.nativeElement.value = value;
  }

  focus() {
    this.textarea.nativeElement.focus();
  }
}
