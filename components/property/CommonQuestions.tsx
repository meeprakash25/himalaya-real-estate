import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { PropertyQuestion } from "@/data/properties"

export function CommonQuestions ({ questions }: { questions: PropertyQuestion[] }) {
  return (
    <section id="common-questions" aria-labelledby="common-questions-title">
      <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
        <CardHeader className="px-5 pt-5 pb-2 sm:px-6 sm:pt-6">
          <h2 id="common-questions-title" className="font-heading text-lg font-semibold text-foreground">Common questions</h2>
        </CardHeader>
        <CardContent className="px-5 pb-4 sm:px-6 sm:pb-5">
          <Accordion defaultValue={[]}>
            {questions.map((question, index) => (
              <AccordionItem key={question.question} value={String(index)} className="border-border">
                <AccordionTrigger className="min-h-11 px-1 py-3 text-sm font-medium text-foreground hover:no-underline">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="px-1 text-sm leading-6 text-muted-foreground">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}
